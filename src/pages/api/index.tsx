import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { SkeletonUIApiBox } from '../../components';
import { ApiPostPage } from '../postApi';
import * as S from './styled';

export const ApiPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [apiInfo, setApiInfo] = useState<any[]>();
  const SkeletonUIRandomWidth = ['40', '50', '55', '45'];
  const getApiInfo = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_BACKEND_BASEURL}/info`,
    })
      .then((res) => {
        setApiInfo(res.data);
        setTimeout(() => {
          setLoading(true); //loading 확인하고싶으면 false로 바꿔주세요.
        }, 1200);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getApiInfo();
  }, []);

  return (
    <S.ApiPageContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <S.ApiListSection>
                {loading ? (
                  <>
                    {apiInfo?.map((item, index) => (
                      <Link key={index} to={item.apiHandler} style={{ textDecoration: 'none' }}>
                        <S.ApiListBox>{item.apiUrl}</S.ApiListBox>
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    <SkeletonUIApiBox
                      randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                    <SkeletonUIApiBox
                      randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                    <SkeletonUIApiBox
                      randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                    <SkeletonUIApiBox
                      randomWidth={SkeletonUIRandomWidth[Math.floor(Math.random() * 4)]}
                    />
                  </>
                )}
              </S.ApiListSection>
              <S.ApiListSectionShadow />
            </>
          }
        />
        <Route path=":urlApi" element={<ApiPostPage />} />
      </Routes>
    </S.ApiPageContainer>
  );
};
