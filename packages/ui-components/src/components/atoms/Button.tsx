import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: #121a3e;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

export const Button: FC = () => <StyledButton>MY BUTTON</StyledButton>;
