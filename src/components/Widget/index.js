import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  input {
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    height: 40px;
    width: 100%;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: none;
    transition: .4s;
  }
  input:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  button {
    font-family: Lato;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    width: 100%;
    height: 32px;
    color: ${({ theme }) => theme.colors.contrastText};
    margin-top: 25px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);    
  }
`;

export default Widget;
