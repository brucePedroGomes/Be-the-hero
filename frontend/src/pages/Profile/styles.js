import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 24px;
    }
    img {
      height: 64px;
    }
    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.2s;

      &:hover {
        border-color: #999;
      }

      svg {
        display: flex;
        margin: 0 auto;
        color: #e02041;
      }
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border: 24px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: none;

      &:hover {
        filter: brightness(90%);
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;
    }
    p + strong {
      margin-top: 32px;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
