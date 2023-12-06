import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Header } from 'components/layout';

function Home() {
  const navigate = useNavigate();
  const handleClick = () =>navigate('/categories');
  return (
    <div>
        <Header />
    </div>
  )
}

export default Home