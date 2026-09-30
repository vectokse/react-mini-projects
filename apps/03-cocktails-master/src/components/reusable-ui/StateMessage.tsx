// src/components/reusable-ui/StateMessage.tsx
import styled from "styled-components";
import theme from "../../theme/theme";
import PrimaryBtn from "./PrimaryBtn";

interface StateMessageProps {
  message: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

export default function StateMessage({
  message,
  actionLabel,
  onActionClick,
}: StateMessageProps) {
  return (
    <StateMessageStyled>
      <p>{message}</p>
      {actionLabel && onActionClick && (
        <PrimaryBtn label={actionLabel} onClick={onActionClick} />
      )}
    </StateMessageStyled>
  );
}

const StateMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 60px 1.5rem;
  margin: 0 auto;
  text-align: center;
  border-radius: ${theme.radius.md};
  color: ${theme.colors.textSecondary};
  font-size: ${theme.font.size.md};
  font-family: ${theme.font.family.primary};
  max-width: 500px;
  gap: 1.5rem;

  ${theme.device.tablet} {
    height: 300px;
  }

  p {
    margin: 0;
    font-weight: ${theme.font.weight.medium};
  }

  .action-btn {
    background: ${theme.colors.accent};
    color: ${theme.colors.surface};
    border: none;
    border-radius: ${theme.radius.sm};
    padding: 0.75rem 1.5rem;
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.size.sm};
    font-weight: ${theme.font.weight.semibold};
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;
