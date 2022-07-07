import React from 'react'

const AdminPortal = () => {
    return (
        <>
            <div className='AdminHeader'>
                <div><h1>Admin Portal</h1></div>
                <div className='addBtn'>
                    <a href=''>Add Property</a>
                </div>
            </div>
            <div className='adminFormDetails'>
                <div className='adminForm'>
                    <form action="/action_page.php">
                        <div className='propName'>
                            <label for="propname"><b>Property Name</b></label>
                            <input type="text" id="propname" name="propname" />
                        </div>
                        <div>
                            <label for="proptype"><b>Property Type</b></label>
                            <select id="proptype" name="proptype">
                                <option houseue="bung">Bungalow</option>
                                <option houseue="villa">Villa/Plot</option>
                                <option houseue="aprt">Apartment</option> </select>

                            <label for="areatype"><b>Area Type</b></label>
                            <select id="areatype" name="areatype">
                                <option houseue="res">Residental</option>
                                <option houseue="com">Commertial</option>
                                <option houseue="rs-cm">Resi-Comm</option> </select>
                        </div>
                        <div className='Location'>
                            <label for="location"><b>Location: City</b></label>
                            <input type="text" id="location" name="location" />

                            <label for="state"><b>State: </b></label>
                            <input type="text" id="state" name="state" />
                        </div>
                        <div className='Pincode'>
                            <label for="pincode"><b>Pincode:</b></label>
                            <input type="text" id="pincode" name="pincode" />
                        </div>
                        <div className='Address'>
                            <label for="address"><b>Address:</b></label>
                            <input type="text" id="address" name="address" />
                        </div>
                        <div className='Area'>
                            <div className='area1'>
                                <label for="area"><b>Area:</b></label>
                                <input type="text" id="area" name="area" /><b>Sqft.</b>
                            </div>
                            <div className='area2'>
                                <label for="car-area"><b>Carpet Area: </b></label>
                                <input type="text" id="car-area" name="car-area" /><b>Sqft.</b>
                            </div>
                        </div>
                        <div className='Price'>
                            <div className='price1'>
                                <label for="price1"><b>Price:</b></label>
                                <input type="text" id="price1" name="price1" /><b>Rs.</b>
                            </div>
                            <div className='price2'>
                                <label for="price2"><b>Price/Sqft: </b></label>
                                <input type="text" id="price2" name="price2" /><b>Rs.</b>
                            </div>
                        </div>
                        <div className='BedBath'>
                            <div className='Bedroom' id='rooms'>
                                <label for="bedroom" ><b>Bedroom:</b></label>
                                <a href="">1</a>
                                <a href="">2</a>
                                <a href="">3</a>
                                <a href="">4</a>
                                <a href="">4+</a>
                            </div>
                            <div className='Bathroom' id='rooms'>
                                <label for="bathroom"><b>Bathroom:</b></label>
                                <a href="">1</a>
                                <a href="">2</a>
                                <a href="">3</a>
                                <a href="">4</a>
                                <a href="">4+</a>
                            </div>
                        </div>
                        <div className='RegisterPropAge'>
                            <div className='Register'>
                                <label for="register"><b>RERA Registered:</b></label>
                                <input type="text" id="register" name="register" />
                            </div>
                            <div className='PropAge'>
                                <label for="propAge"><b>Age of the Property:</b></label>
                                <a href="">0-1</a>
                                <a href="">2-5</a>
                                <a href="">5-10</a>
                                <a href="">10+</a>
                            </div>
                        </div>
                        <div className='Status'>
                            <div className='MovStatus'>
                                <label for="movStatus"><b>Move-In Status:</b></label>
                                <input type="text" id="movStatus" name="movStatus" />
                            </div>
                            <div className='FurStatus'>
                                <label for="furStatus"><b>Furnishing Status: </b></label>
                                <input type="text" id="furStatus" name="furStatus" />
                            </div>
                        </div>
                        <div className='About'>
                            <label for="about"><b>About:</b></label>
                            <textarea type="text" id="about" />
                        </div>
                        <div className='Uploads'>
                            <div>
                                <label for="photos"><b>Photos:</b></label>
                                <a href=''>Upload</a>
                            </div>
                            <div>
                                <label for="layout"><b>3D Layout:</b></label>
                                <a href=''>Upload</a>
                            </div>
                            <div>
                                <label for="floor"><b>Floor Plan:</b></label>
                                <a href=''>Upload</a>
                            </div>
                            <div>
                                <label for="brochure"><b>Brochure:</b></label>
                                <a href=''>Upload</a>
                            </div>
                        </div>
                        <div className='SubmitBtn'>
                            <a href=''>Submit</a>
                        </div>
                    </form>
                </div>
                <div className='adminMap'>
                    <div><h5>Location in Map</h5></div>
                    <div className='mapBox'></div>
                </div>
            </div>
        </>
    );
};

export default AdminPortal;