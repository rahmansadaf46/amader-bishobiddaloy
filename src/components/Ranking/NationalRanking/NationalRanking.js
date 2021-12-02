import React from 'react';
import '../Ranking.css';
import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const NationalRanking = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className="rankingheader">
                    <h1>Top 10 National Universities 2021 Ranking in Bangladesh</h1>
                    <p>Updated on June 13th, 2021</p>
                </div>
                <div className="rankingimage">
                    <img src={pic} alt="" />
                </div>
                <table className="ranking">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">University Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">01</th>
                            <td>Rajshahi College, Rajshahi</td>
                        </tr>
                        <tr>
                            <th scope="row">02</th>
                            <td>Eden Mohila College, Dhaka</td>
                        </tr>
                        <tr>
                            <th scope="row">03</th>
                            <td>Dhaka College, Dhaka</td>
                        </tr>
                        <tr>
                            <th scope="row">04</th>
                            <td>Dhaka Commerce College, Dhaka (Private)</td>
                        </tr>
                        <tr>
                            <th scope="row">05</th>
                            <td>Brojomohun College, Barishal</td>
                        </tr>
                        <tr>
                            <th scope="row">06</th>
                            <td>Government Azizul Haque College, Bogra</td>
                        </tr>
                        <tr>
                            <th scope="row">07</th>
                            <td>Anondo Mohon College, Mymensingh</td>
                        </tr>
                        <tr>
                            <th scope="row">08</th>
                            <td>Carmichael College Rangpur</td>
                        </tr>
                        <tr>
                            <th scope="row">09</th>
                            <td>Government Saadat College, Tangail</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Lalmatia Mohila College, Dhaka (Private)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default NationalRanking;