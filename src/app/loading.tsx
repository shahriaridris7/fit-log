import React from 'react';

const loading = () => {
    return (
        <div className='container mx-auto flex min-h-screen items-center justify-center'>
            <span className="loading loading-spinner text-success size-15 "></span>
            <span >Loading...</span>
        </div>
    );
};

export default loading;