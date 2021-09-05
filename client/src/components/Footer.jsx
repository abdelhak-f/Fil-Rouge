import React from "react";


function Footer () {
    return(
<footer  className="pt-4 page-footer font-small blue bg-dark ">
    <div className="text-center container-fluid text-md-left ">
        <div className="row">
            <div className="mt-3 text-white col-md-6 mt-md-0">
                <h5 className=" text-uppercase">Footer Content</h5>
                <p >Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix pb-0 w-100 d-md-none"/>

            <div className="mb-3 col-md-3 mb-md-0">
                <h5 className="text-white text-uppercase">Youcode</h5>
                <img src="" alt="logo" width={300} /></div>

            <div className="mb-3 col-md-3 mb-md-0">
                <h5 className="text-white text-uppercase " >BF Digital</h5>
                <img src="" alt="logo" width={300} />
            </div>
        </div>
    </div>

    <div className="py-3 text-center text-white footer-copyright " >© 2020 Copyright:
        <a href="https://www.youcode.ma/"> Youcode</a>
    </div>

</footer>
)

}

export default Footer