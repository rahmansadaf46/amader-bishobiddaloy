import React from 'react';
import '../Ranking.css';
import pic from '../../../fakeData/images/images/ranking/public.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PublicRanking = () => {
    return (
        <div>
            <Header></Header>
            <div>
  <div className="rankingheader">
    <h1>Top 10 Public Universities 2021 Ranking in Bangladesh</h1>
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
      <th scope="col">World Ranking</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>Bangladesh University of Engineering and Technology (BUET)</td>
      <td>1794</td>
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>Dhaka University (DU)</td>
      <td>1909</td>
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>Khulna University of Science and Technology (KUET)</td>
      <td>3499</td>
    </tr>
    <tr>
      <th scope="row">04</th>
      <td>Jahangirnagar University (JU)</td>
      <td>3042</td>
    </tr>
    <tr>
      <th scope="row">05</th>
      <td>Chittagong University of Engineering and Technology (CUET)</td>
      <td>3714</td>
    </tr>
    <tr>
      <th scope="row">06</th>
      <td>Rajshahi University (RU)</td>
      <td>2275</td>
    </tr>
    <tr>
      <th scope="row">07</th>
      <td>Shahajalal University of Science and Technology (SUST)</td>
      <td>3011</td>
    </tr>
    <tr>
      <th scope="row">08</th>
      <td>Chittagong University (CU)</td>
      <td>3101</td>
    </tr>
    <tr>
      <th scope="row">09</th>
      <td>Bangladesh Agriculture University (BAU)</td>
      <td>2774</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Khulna University (KU)</td>
      <td>3627</td>
    </tr>
  </tbody>
</table>
</div>

        <Footer></Footer>
      </div>
      
    );
};

export default PublicRanking;