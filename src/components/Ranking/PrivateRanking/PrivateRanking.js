import React from 'react';
import '../Ranking.css';
import pic from '../../../fakeData/images/images/ranking/private.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PrivateRanking = () => {
    return (
        <div>
            <Header></Header>
            <div>
  <div className="rankingheader">
    <h1>Top 10 Private Universities 2021 Ranking in Bangladesh</h1>
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
        <td>North South University (NUS)</td>
        <td>3091</td>
      </tr>
      <tr>
        <th scope="row">02</th>
        <td>BRAC University (BRACU)</td>
        <td>3039</td>
      </tr>
      <tr>
        <th scope="row">03</th>
        <td>East West University (EWU)</td>
        <td>3549</td>
      </tr>
      <tr>
        <th scope="row">04</th>
        <td>Independent University, Bangladesh (IUB)</td>
        <td>3167</td>
      </tr>
      <tr>
        <th scope="row">05</th>
        <td>Ahsanullah University of Science and Technology (AUST)</td>
        <td>4043</td>
      </tr>
      <tr>
        <th scope="row">06</th>
        <td>American International University (AIUB)</td>
        <td>3790</td>
      </tr>
      <tr>
        <th scope="row">07</th>
        <td>Daffodil International University (DIU)</td>
        <td>3531</td>
      </tr>
      <tr>
        <th scope="row">08</th>
        <td>United International University (UIU)</td>
        <td>4147</td>
      </tr>
      <tr>
        <th scope="row">09</th>
        <td>University Of Liberal Arts Bangladesh (ULAB)</td>
        <td>8647</td>
      </tr>
      <tr>
        <th scope="row">10</th>
        <td>University of Asia Pacific (UAP)</td>
        <td>4612</td>
      </tr>
    </tbody>
  </table>
</div>

        <Footer></Footer>
      </div>
      
    );
};

export default PrivateRanking;