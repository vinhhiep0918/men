import React from 'react'
import FooterWebsite from '../components/website/FooterWebsite'
import Header from '../components/website/Header'
import News from '../pages/website/News'


const WebsiteLayout = ({ children }) => {
    return (
        <div style = {
            {width:'1600px',margin :'0px auto'} 
        }>
            <Header />
            <div style={{paddingLeft : '100px' , paddingRight :'200px',backgroundColor:'#E33539'}}>
                    <main style={{marginTop:'-20px' , marginBottom:'-88px'}}>
                         { children }
                    </main>
            </div>
            <footer className="text-muted py-5">
                    <FooterWebsite />
                </footer>
        </div>
    )
}

export default WebsiteLayout
