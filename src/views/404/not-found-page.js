import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { HOME } from '../../constants/routes';
import Lottie from 'lottie-react';
import notFound from '../../files/404.json';

const NotFoundPage = () => {
    const navigate = useNavigate();
    return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Lottie style={{ width: '40%', height: 'auto' }} animationData={notFound} loop />
        <Button color='primary' size='sm' onClick={() => navigate(HOME)}>Ana Sayfaya Geri Dön</Button>
    </div>
}


export default NotFoundPage;