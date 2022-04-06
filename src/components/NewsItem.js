import React from 'react'

const NewsItem = (props)=>{
        let {title, description, imageUrl, newsUrl, author, date} = props;
        return (
        <div className='my-3 mx-4'>
            <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://indiaeducationdiary.in/wp-content/uploads/2021/05/Washington-University-in-St.Louis_.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
        </div>
    )
}

export default NewsItem
