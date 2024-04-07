import './index.css'
// import Footer from '../Footer';
const Whychooseus = () =>{
    return(
        <>
            <div className="whychoose-container" class="wcu-section pt-5 mt-5 pb-5" id="wcuSection">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="wcu-section-heading">Why Choose Us?</h1>
                            <p class="wcu-section-description">
                                We use both original recipes and classic versions of famous products
                                items.
                            </p>
                        </div>
                        <div class="col-6 col-md-6">
                            <div class="wcu-card p-3 mb-3">
                                <img
                                    src="https://res.cloudinary.com/drevfgyks/image/upload/v1712301100/Screenshot_2024-04-05_124121_ky7ms2.png"
                                    class="wcu-card-image"
                                    alt='image5'
                                />
                                <h1 class="wcu-card-title mt-3">Our Service</h1>
                                <p class="wcu-card-description">
                                    Experience fine best product at the comfort of your home. All our
                                    orders are carefully packed and arranged to give you the nothing
                                    less than perfect.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 col-md-6">
                            <div class="wcu-card p-3 mb-3">
                                <img
                                    src="https://res.cloudinary.com/drevfgyks/image/upload/v1712247419/Screenshot_2024-04-04_214537_hff28o.png"
                                    class="wcu-card-image"
                                    alt='image4'
                                />
                                <h1 class="wcu-card-title mt-3">Fresh Products</h1>
                                <p class="wcu-card-description">
                                    The Fresh products group provides fresh-honey and coffee
                                    directly picked from our partner farms and farm houses so that
                                    you always get them tree to plate.
                                </p>
                            </div>
                        </div>
                        {/* <div class="col-12 col-md-4">
                            <div class="wcu-card p-5 mb-3">
                                <img
                                    src="https://res.cloudinary.com/drevfgyks/image/upload/v1712247420/Screenshot_2024-04-04_214622_kfuuyx.png"
                                    class="wcu-card-image"
                                    alt='image3'
                                />
                                <h1 class="wcu-card-title mt-3">Best Offers</h1>
                                <p class="wcu-card-description">
                                    Food Coupons & Offers upto
                                    <span class="offers">60% OFF</span>
                                    and Exclusive Promo Codes on All Online Food Orders.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychooseus;