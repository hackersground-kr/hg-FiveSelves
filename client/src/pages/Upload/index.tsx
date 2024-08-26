/*eslint-disable*/
import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import MenuBar from 'components/MenuBar';
import * as S from './style';
import UploadIcon from 'assets/icon/UploadIcon';
import { useNavigate } from 'react-router-dom';

interface Prediction {
  probability: number;
  tagId: string;
  tagName: string;
}

interface RequestData {
  title: string;
  content: string;
  image: string;
  grade: string;
  price: number;
  origin: string;
  quantity: number;
}

const Upload: React.FC = () => {
  const history = useNavigate();
  const [selectState, setSelectState] = useState<number>(2);
  const [requestData, setRequestData] = useState<RequestData>({
    title: '',
    content: '',
    image: '',
    grade: '',
    price: 0,
    origin: '',
    quantity: 0
  });

  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const uploadResponse = await axios.post(
        `http://211.112.175.88:8080/file/upload`,
        formData
      );

      console.log(uploadResponse.data);
      setImage(uploadResponse.data);
      setRequestData((prevData) => ({
        ...prevData,
        image: uploadResponse.data
      }));

      const predictionResponse = await axios.post<{
        predictions: Prediction[];
      }>(
        `https://gradeclassification-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9d1898e5-7c51-445e-af5f-ae043bd75943/classify/iterations/Iteration0/url`,
        { Url: uploadResponse.data },
        {
          headers: {
            'Prediction-Key': '860889ec62bd48cf81832d262c314491',
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Prediction result:', predictionResponse.data);

      const bestPrediction = predictionResponse.data.predictions.reduce(
        (max, prediction) =>
          prediction.probability > max.probability ? prediction : max,
        predictionResponse.data.predictions[0]
      );

      setRequestData((prevData) => ({
        ...prevData,
        grade: bestPrediction.tagName
      }));
    } catch (error) {
      console.error('파일 업로드 중 오류 발생:', error);
      setImage(null);
    }
  };

  const inputChange = (target: keyof RequestData, data: string | number) => {
    setRequestData((prevData) => ({ ...prevData, [target]: data }));
  };

  const onSubmit = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('액세스 토큰이 없습니다.');
      return;
    }

    try {
      const response = await axios.post(
        `http://211.112.175.88:8080/post`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('상품이 성공적으로 등록되었습니다:', response.data);
      alert('상품이 성공적으로 등록되었습니다:');
      history('/');
    } catch (error) {
      console.error('상품 등록 중 오류 발생:', error);
    }
  };

  return (
    <S.Layout>
      <S.Title>상품 등록</S.Title>
      <S.ImgLayout>
        {image ? (
          <S.Img src={image} alt="Uploaded preview" />
        ) : (
          <>
            <UploadIcon />
            <S.UploadText>사진을 업로드해주세요</S.UploadText>
            <S.UploadText>1:1 비율 권장</S.UploadText>
          </>
        )}
        <S.FileInput type="file" accept="image/*" onChange={handleFileChange} />
      </S.ImgLayout>
      <S.InputsLayout>
        <S.NameLayout>
          <S.Category>상품명</S.Category>
          <S.Input
            placeholder="예) 의성 마늘"
            value={requestData.title}
            onChange={(e) => inputChange('title', e.target.value)}
          />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>내용</S.Category>
          <S.Input
            placeholder="예) 의성 마늘에 대한 설명"
            value={requestData.content}
            onChange={(e) => inputChange('content', e.target.value)}
          />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>등급 (자동 설정)</S.Category>
          <S.Input
            disabled
            value={requestData.grade}
            onChange={(e) => inputChange('grade', e.target.value)}
          />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>판매가 (원)</S.Category>
          <S.Input
            placeholder="예) 15"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={requestData.price}
            onChange={(e) => inputChange('price', Number(e.target.value))}
          />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>원산지</S.Category>
          <S.Input
            placeholder="예) 경상북도 의성군"
            value={requestData.origin}
            onChange={(e) => inputChange('origin', e.target.value)}
          />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>판매수량 (낱개)</S.Category>
          <S.Input
            placeholder="예) 30"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            value={requestData.quantity}
            onChange={(e) => inputChange('quantity', Number(e.target.value))}
          />
        </S.NameLayout>
      </S.InputsLayout>
      <S.Submit onClick={onSubmit}>제출하기</S.Submit>
      <MenuBar />
    </S.Layout>
  );
};

export default Upload;
