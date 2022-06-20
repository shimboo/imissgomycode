import React from 'react';
import Photo from '../photos/bell.jpg'

function Contact() {
    return (<div className='coo'>
        <img className='bell' src={Photo} alt='hotel-bell' />
        <div className='con'>
            <div className='sheesh'>
                <h4>Tawau Office:</h4>
                <h5>1st Floor, No. 484, Block P, Bandar Sabindo,<br />
                    P.O Box 61120, 91021 Tawau, Sabah, Malaysia.</h5>

                <h5>Tel: 6089-765200 (3 lines)<br />
                    Fax: 6089-763575, 763563</h5>

                <h5> Email: mail@sipadan-kapalai.com</h5>
            </div>
            <div className='sheesh'>
                <h4>Sandakan Office:</h4>
                <h5>Ground Floor, Lot 38 and 39, Block C,<br />
                    Bandar Tyng, Mile 5, North Road,<br />
                    PPM 255 Elopura, 90000 Sandakan, Sabah, Malaysia.</h5>
                <h5>Tel: 6089-673999, 674999, 675999<br />
                    Fax: 6089-673777</h5>
                <h5>Email: mail@lankayan-island.com / <br />
                    mail@sipadan-kapalai.com /  <br />
                    mail@sepilok.com</h5>
            </div>
            <div className='sheesh'>
                <h4>Kota Kinabalu Office:</h4>
                <h5>PULAU SIPADAN RESORT and TOURS SDN. BHD.<br />
                    (Co No. 190571-V) KKKP/PL: 2536 <br />
                    Block B, 1st Floor, Lot B-1-1, Plaza Tanjung Aru, <br />
                    Jalan Mat Salleh, Tanjung Aru,<br />
                    88100 Kota Kinabalu, Sabah, Malaysia.</h5>
                <h5>Tel: 6088-238113<br />
                    Fax: 6088-238112</h5>
                <h5>Email: psrtkk@sipadan-resort.com</h5>
            </div>
        </div>
    </div>)
}

export default Contact;

