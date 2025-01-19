import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/banner1.jpg" className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/banner2.jpg" className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/banner3.jpg" className="d-block w-100" alt="..." style={{height: "500px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3">
                <div className="text-center">
                    <h1>Menu</h1>
                </div>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="special-tab" data-bs-toggle="tab" data-bs-target="#special-tab-pane" type="button" role="tab" aria-controls="special-tab-pane" aria-selected="true">Today's Special</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="main-tab" data-bs-toggle="tab" data-bs-target="#main-tab-pane" type="button" role="tab" aria-controls="main-tab-pane" aria-selected="false">Main Dishes</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="side-tab" data-bs-toggle="tab" data-bs-target="#side-tab-pane" type="button" role="tab" aria-controls="side-tab-pane" aria-selected="false">Side Dishes</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="beverage-tab" data-bs-toggle="tab" data-bs-target="#beverage-tab-pane" type="button" role="tab" aria-controls="beverage-tab-pane" aria-selected="false">Beverages</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="card-body tab-pane fade show active" id="special-tab-pane" role="tabpanel" aria-labelledby="special-tab" tabIndex="0">
                            <h3 className="card-title">Today's Special</h3>
                            <br/>
                            <div className="card mb-3 mx-auto" style={{width: "32rem"}}>
                                <img src="images/special.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                </div>
                            </div>                 
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        <div className="card-body tab-pane fade" id="main-tab-pane" role="tabpanel" aria-labelledby="main-tab" tabIndex="0">
                            <h3 className="card-title">Main Dishes</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                <div className="col mb-4 " >
                                    <div className="card">
                                        <img src="images/main1.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/main2.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/main3.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/main4.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/main5.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/main6.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        <div className="card-body tab-pane fade" id="side-tab-pane" role="tabpanel" aria-labelledby="side-tab" tabIndex="0">
                            <h3 className="card-title">Side Dishes</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/side1.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/side2.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/side3.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/side4.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/side6.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/side6.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                        <div className="card-body tab-pane fade" id="beverage-tab-pane" role="tabpanel" aria-labelledby="beverage-tab" tabIndex="0">
                            <h3 className="card-title">Beverages</h3>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3">
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/drink1.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/drink2.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/drink3.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/drink4.png" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/drink5.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src="images/drink6.jpg" className="card-img-top" alt="..." style={{height: "300px"}}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="order-now-btn btn btn-secondary"> Order Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="view_order.html" className="btn btn-primary">Go To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
  