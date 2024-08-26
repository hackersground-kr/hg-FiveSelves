/*eslint-disable*/
import MenuBar from 'components/MenuBar';
import React, { ChangeEvent, useState } from 'react';
import * as S from './style';
import UploadIcon from 'assets/icon/UploadIcon';

const Upload = () => {
  const [selectState, setSelectState] = useState(2);

  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
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
          <S.Input placeholder="예) 의성 마늘" />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>등급 (자동 설정)</S.Category>
          <S.Input disabled />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>판매가 (원)</S.Category>
          <S.Input
            placeholder="예) 15"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>원산지</S.Category>
          <S.Input placeholder="예) 경상북도 의성군" />
        </S.NameLayout>
        <S.NameLayout>
          <S.Category>판매수량 (낱개)</S.Category>
          <S.Input placeholder="예) 30" />
        </S.NameLayout>
      </S.InputsLayout>
      <S.Submit>제출하기</S.Submit>
      <MenuBar selectState={selectState} setSelectState={setSelectState} />
    </S.Layout>
  );
};

export default Upload;
