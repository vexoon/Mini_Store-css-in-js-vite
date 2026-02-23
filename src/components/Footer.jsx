import styled from "styled-components";
import Container from "@mui/material/Container";

const StyledFooter = styled.footer`
  background-color: #111;
  color: #aaa;
  padding: 40px 0;
  margin-top: 80px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Inner>
          <h3 style={{ color: "#fff", margin: 0 }}>Super Store</h3>
          <p style={{ margin: 0 }}>
            © 2026 Super Store. All rights reserved.
          </p>
        </Inner>
      </Container>
    </StyledFooter>
  );
}

export default Footer;