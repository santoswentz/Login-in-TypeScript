import styled from "styled-components";
import React from "react";

interface ButtonStyleProps {
  background?: string;
  textColor?: string;
}

export const ButtonContainer = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps
>`
  width: 100%;
  height: 56px;
  background: ${({ background }) =>
    background ||
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: ${({ textColor }) => textColor || "#ffffff"};
  border: none;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
