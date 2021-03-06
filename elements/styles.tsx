import styled from "styled-components";

// BUTTON
export const Button = styled.a<{ alert: boolean }>`
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  border: 1px solid white;
  border-radius: 90px;
  padding: 5px 10px;
  margin: 20px;
  font-size: 15px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-left: auto;
  order: 2;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.alert ? "rgb(138, 36, 36)" : "grey")};
    border: 1px solid ${(props) => (props.alert ? "rgb(138, 36, 36)" : "grey")};
  }
`;

// HR - LINE
export const Hr = styled.hr`
  border: 1px solid rgb(93, 109, 116);
  width: 1115px;
`;

// HR - LINE
export const Response = styled.p<{ response: string }>`
  color: ${(props) => (props.response == "Success" ? "green" : "red")};
  font-size: 15px;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
`;
