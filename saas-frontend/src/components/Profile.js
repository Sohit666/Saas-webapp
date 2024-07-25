import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const InfoItem = styled.p`
  margin: 0.5rem 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Container>
      <Title>Profile</Title>
      {user ? (
        <Info>
          <InfoItem>Name: {user.name}</InfoItem>
          <InfoItem>Email: {user.email}</InfoItem>
          <InfoItem>Company: {user.company}</InfoItem>
          <Button onClick={handleLogout}>Logout</Button>
        </Info>
      ) : (
        <InfoItem>No user data available.</InfoItem>
      )}
    </Container>
  );
};

export default Profile;
