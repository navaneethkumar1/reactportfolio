import '../Css/Qualification.css';
function Qualification(){
    return(
        <>
      <h1>Education</h1>  
      <div className="education">
        <table align="center" border="2px solid white">
<tr>
 <th>Education</th>
 <th>Scool/College</th>
 <th>Passing Year</th>
 <th>Percentage/CGPA</th>
</tr>
<tr>
  <td>10th</td>
  <td>S.D.P.H.S.S DHARMATHADKA</td>
  <td>2019</td>
  <td>90%</td>
</tr>
<tr>
  <td>2nd PUC</td>
  <td>PARIJNAN PU COLLEGE SOMESHWAR</td>
  <td>2021</td>
  <td>90.6%</td>
</tr>
<tr>
  <td>BE</td>
  <td>CANARA ENGINEERING COLLEGE</td>
  <td>Current</td>
  <td>8.4</td>
</tr>
        </table>
      </div>
        </>
    );
}
export default Qualification;