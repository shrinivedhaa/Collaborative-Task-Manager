import React from 'react';

const Home = () => {
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            maxHeight: '88vh', // Use '100%' instead of '100vh'
            background: '#f5f5f5'
        }}>
            <div style={{ 
                flex: '1', 
                padding: '20px', 
                textAlign: 'center', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                borderRadius: '8px', 
                background: '#fff', 
                maxWidth: '600px',
                marginLeft: '20px',
            }}>
                <blockquote style={{ 
                    fontFamily: 'Roboto, sans-serif', 
                    fontSize: '28px', 
                    color: '#333', 
                    // borderLeft: '4px solid #ff5722', 
                    paddingLeft: '20px',
                    margin: '0'
                }}>
                    <p style={{ marginBottom: '1em' }}>
                        Teamwork makes dream work.
                    </p>
                </blockquote>
            </div>
            <div style={{ flex: '1', padding: '20px' }}>
                <img src="workflow.webp" alt="manage" style={{ width: '100%', borderRadius: '8px' }} />
            </div>
        </div>
    );
}

export default Home;
