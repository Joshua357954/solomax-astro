import React from 'react';

export default function BlogCard({ fullData }) {
    const { slug, data } = fullData;

    const formattedDate = data
        ? new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date(data.date))
        : '';

    const imgStyle = {
        width: '100%',
        height: '50%',
        backgroundSize: 'cover',
        borderTopRightRadius: '0.6rem',
        borderTopLeftRadius: '0.6rem',
        transition: 'transform 0.8s ease-in-out',
    };

    return (
        <div className="blog-card" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: '25px', fontWeight: 500, backgroundColor: 'white', color: 'rgb(0, 0, 0)', borderRadius: '0.4rem', height: '480px', minHeight: '350px', marginBottom: '20px', minWidth: '210px', boxShadow: '0 24px 48px 0 rgb(0, 0, 0, 0.1)', transition: 'all 0.5s ease-in-out' }}>
            <a href={`blog/${slug}`} className="between" style={{ color: 'black', width: '100%', height: '100%', textDecoration: 'none', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="bc_inner" style={{ width: '100%', height: '100%' }}>
                    <div className="bc_img" style={{ ...imgStyle, backgroundImage: `url('${data.imageUrl}')` }}></div>
                    <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', fontSize: '15px', fontWeight: 'bolder', gap: '5px', color: '#467fbc', padding: '15px 10px' }}>
                        <li>#{data.category}</li>
                    </ul>
                    <h5 style={{ fontSize: '20px', fontWeight: 700, lineHeight: '25px', padding: '0 10px', color: 'rgb(33, 37, 41)', wordBreak: 'keep-all' }}>{data.title}</h5>
                </div>

                <div className="bc_meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '13px', marginBottom: '15px', marginLeft: '10px' }}>
                    <img className="img" src={data.avatarUrl} srcSet='/images/So-max_Mountain.png' alt="Author image" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'contain', padding: '2px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }} />

                    <div className="data" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
                        <p style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(130, 130, 130)' }}>{data.author}</p>
                        <p style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(130, 130, 130)' }}>{formattedDate}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}
