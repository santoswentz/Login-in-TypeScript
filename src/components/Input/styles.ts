// No seu arquivo styles.ts
import styled from 'styled-components';

interface InputContainerProps {
  hasError?: boolean;
  children?: React.ReactNode; // ← Adicione esta linha
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  position: relative;

  & input {
    width: 100%;
    height: 56px;
    padding: 0 20px;
    border: 2px solid ${props => props.hasError ? '#ef4444' : '#e5e7eb'};
    border-radius: 16px;
    background: #ffffff;
    font-size: 16px;
    transition: all 0.2s ease;
    outline: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    &:focus {
      border-color: ${props => props.hasError ? '#ef4444' : '#667eea'};
      box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(102, 126, 234, 0.1)'};
      transform: translateY(-1px);
    }

    &:hover:not(:focus) {
      border-color: ${props => props.hasError ? '#ef4444' : '#9ca3af'};
    }

    &::placeholder {
      color: #9ca3af;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '⚠';
    font-size: 12px;
  }
`;