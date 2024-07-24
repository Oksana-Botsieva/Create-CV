import React, { FC, PropsWithChildren } from "react";
import * as S from "./style";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Inner>{children}</S.Inner>
    </S.Wrapper>
  );
};

export { Card };
