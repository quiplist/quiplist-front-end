import React from 'react';

class Footer extends React.Component{
    render (){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="row justify-content-center text-center py-2">
                        <div className="col">
                            <h6>©2020 Quiplist Events Production Inc. All rights reserved</h6>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;