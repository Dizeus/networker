import {NavLink} from "react-router-dom";
import '../../styles/css/Header.css'
import defAvatar from '../../assets/avatar.webp'
import {API_URL} from "../../config";
function Header({fullname, isAuth, avatar, logout, username}){
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to={'/home'}>
                    <svg className="header__logo" version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="46px" >
                        <path fill="#ffffff" d="M1.0126953125,18.2685546875q0-0.19921875,0.19091796875-0.298828125t0.4150390625-0.1494140625t0.40673828125-0.0498046875l0.1826171875,0q0.5810546875,0,0.83837890625,0.265625t0.62255859375,0.6806640625q2.490234375,3.6025390625,4.5654296875,7.41259765625t4.0009765625,7.71142578125q0.166015625-4.548828125,0.34033203125-9.15576171875t0.43994140625-9.13916015625q0-0.19921875,0.19091796875-0.33203125t0.431640625-0.19921875t0.48974609375-0.0830078125t0.3818359375-0.0166015625q0.19921875,0,0.43994140625,0.0166015625t0.4814453125,0.099609375t0.3984375,0.19921875t0.15771484375,0.3154296875q0.06640625,0.7138671875,0.07470703125,1.43603515625t0.00830078125,1.43603515625q0,5.345703125-0.232421875,10.4755859375t-0.232421875,10.359375l0,1.1953125q0,0.06640625-0.06640625,0.19921875q0.033203125,0.1328125,0.099609375,0.29052734375t0.06640625,0.22412109375q0,0.265625-0.27392578125,0.3984375t-0.59765625,0.20751953125t-0.57275390625,0.07470703125t-0.1826171875,0q-0.8466796875,0-1.427734375-0.46484375t-0.5810546875-1.1123046875q-1.228515625-2.755859375-2.44873046875-5.47021484375t-2.54833984375-5.40380859375q-0.8466796875-1.693359375-1.70166015625-3.39501953125t-1.83447265625-3.29541015625q0.033203125,0.033203125,0.033203125,0.099609375q0.166015625,1.66015625,0.35693359375,3.31201171875t0.29052734375,3.31201171875q0.06640625,1.427734375,0.1494140625,2.888671875t0.265625,2.888671875q0,0.5478515625-0.34033203125,0.697265625t-0.78857421875,0.1494140625q-0.3818359375,0-0.72216796875-0.099609375t-0.40673828125-0.498046875q0-1.52734375-0.1162109375-3.24560546875t-0.2158203125-3.46142578125q-0.166015625-2.3076171875-0.43994140625-4.68994140625t-0.27392578125-4.65673828125q0-0.099609375,0.0166015625-0.20751953125t0.0166015625-0.24072265625q-0.099609375-0.166015625-0.22412109375-0.3486328125t-0.12451171875-0.33203125z M19.451552734375,34.48828125q0-1.162109375,0.25732421875-2.7392578125t0.87158203125-2.98828125t1.61865234375-2.39892578125t2.53173828125-0.98779296875q1.427734375,0,2.1416015625,0.82177734375t0.7138671875,2.21630859375q0,0.9130859375-0.34033203125,2.00048828125t-0.97119140625,2.05859375t-1.494140625,1.61865234375t-1.92578125,0.6474609375l-0.431640625-0.033203125q0,0.4482421875,0.1328125,1.20361328125t0.39013671875,1.50244140625t0.6640625,1.3115234375t0.98779296875,0.564453125q0.8466796875,0,1.626953125-0.6806640625t1.4775390625-1.5107421875t1.294921875-1.5107421875t1.095703125-0.6806640625q0.265625,0,0.5478515625,0.0830078125t0.3154296875,0.46484375q0,0.232421875-0.12451171875,0.3818359375t-0.22412109375,0.33203125q-0.5146484375,0.8798828125-1.12060546875,1.6767578125t-1.36962890625,1.4443359375t-1.66845703125,1.02099609375t-2.00048828125,0.37353515625q-1.427734375,0-2.3740234375-0.50634765625t-1.52734375-1.361328125t-0.83837890625-1.9755859375t-0.25732421875-2.34912109375z M22.423232421875,33.2265625l0.46484375,0.4150390625q0.33203125,0.298828125,0.6640625,0.1328125t0.59765625-0.60595703125t0.48974609375-1.08740234375t0.3984375-1.328125t0.25732421875-1.328125t0.0830078125-1.0791015625l0-0.564453125t-0.0498046875-0.59765625t-0.17431640625-0.47314453125t-0.39013671875-0.24072265625q-0.0830078125-0.0166015625-0.1494140625-0.0166015625q-0.564453125,0-0.962890625,0.7138671875q-0.431640625,0.796875-0.697265625,1.93408203125t-0.3818359375,2.33251953125t-0.1494140625,1.79296875z M32.64431640625,23.265625q0-0.232421875,0.498046875-0.3984375t1.12890625-0.27392578125t1.22021484375-0.15771484375t0.80517578125-0.0830078125q0-0.4482421875,0.033203125-0.90478515625t0.1826171875-0.8134765625t0.47314453125-0.57275390625t0.90478515625-0.2158203125q0.4814453125,0,0.73046875,0.1162109375t0.53125,0.4814453125q0.06640625,0.19921875,0.06640625,0.3818359375l0,0.55615234375t-0.033203125,0.57275390625q0.6142578125-0.06640625,1.22021484375-0.15771484375t1.22021484375-0.09130859375q0.4482421875,0,0.6142578125,0.0166015625t0.33203125,0.3984375q0.1328125,0.3818359375-0.32373046875,0.5810546875t-1.095703125,0.298828125t-1.27001953125,0.1494140625t-0.763671875,0.0498046875q-0.19921875,2.85546875-0.40673828125,5.6611328125t-0.20751953125,5.6943359375q0,1.294921875,0.0830078125,2.6728515625t0.46484375,2.6064453125q0.099609375,0.3818359375,0.33203125,0.7138671875t0.232421875,0.7138671875q0,0.232421875-0.1826171875,0.365234375t-0.43994140625,0.22412109375t-0.5146484375,0.10791015625t-0.42333984375,0.0166015625q-1.0458984375,0-1.59375-0.7802734375t-0.78857421875-1.86767578125t-0.25732421875-2.23291015625t-0.0166015625-1.859375q0-1.4609375,0.05810546875-2.98828125t0.14111328125-3.021484375t0.232421875-2.921875t0.3486328125-2.65625q-0.5810546875,0.06640625-1.13720703125,0.1494140625t-1.13720703125,0.0830078125q-0.1328125,0-0.35693359375-0.0166015625t-0.42333984375-0.0830078125t-0.34033203125-0.1826171875t-0.14111328125-0.33203125z M45.339033203125,29.5244140625q0-0.6806640625,0.3984375-1.17041015625t0.97119140625-0.796875t1.25341796875-0.45654296875t1.26171875-0.1494140625q0.4482421875,0,1.1953125,0.1328125t1.4609375,0.3984375t1.23681640625,0.697265625t0.52294921875,1.0126953125q0,0.265625-0.19921875,0.47314453125t-0.4150390625,0.20751953125q-0.4482421875,0-0.8134765625-0.29052734375t-0.75537109375-0.6142578125t-0.85498046875-0.6142578125t-1.0458984375-0.29052734375t-1.05419921875,0.37353515625t-0.47314453125,0.98779296875q0,1.0126953125,0.7138671875,1.98388671875t1.56884765625,2.0419921875t1.56884765625,2.24951171875t0.7138671875,2.6064453125q0,0.6142578125-0.25732421875,1.03759765625t-0.6806640625,0.68896484375t-0.95458984375,0.40673828125t-1.029296875,0.14111328125q-0.5478515625,0-1.2783203125-0.25732421875t-1.3779296875-0.6806640625t-1.08740234375-0.98779296875t-0.43994140625-1.1787109375q0-0.298828125,0.42333984375-0.3818359375t0.62255859375-0.0830078125q0.099609375,0,0.30712890625,0.06640625t0.40673828125,0.1494140625t0.35693359375,0.1826171875t0.12451171875,0.2158203125q0.166015625,0.19921875,0.50634765625,0.58935546875t0.6806640625,0.630859375t0.59765625,0.17431640625t0.25732421875-0.7470703125q0-1.294921875-0.697265625-2.38232421875t-1.51904296875-2.125t-1.51904296875-2.05859375t-0.697265625-2.18310546875z"/>
                    </svg>
                </NavLink>
                {isAuth?
                    <div className="header__profile">
                        <div className='header__profile-content'>
                            <NavLink to={'/home'}>
                            <img className='header__profile-image' src={avatar?`${API_URL}${avatar}`:defAvatar} alt="avatar"/>
                            </NavLink>
                            <div className='header__profile-text'>
                                <div className='header__profile-fullname'>{fullname}</div>
                                <div className='header__profile-username'>{username || ''}</div>
                            </div>

                        </div>
                        <button className='header__logout' onClick={()=>logout()}>Logout</button>
                    </div>:
                    <div className='header__auth'>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;