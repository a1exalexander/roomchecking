import React from 'react';
import { Table } from 'components/common';
import './style.scss';

export default {
  title: 'Table'
};

export const DefaultTable = () => {
  return (
    <section className='section'>
      <h2 className='title'>Default Table</h2>
      <article className='row'>
        <Table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Phone</th>
            <th>Street</th>
          </thead>
          <tbody>
            <tr>
              <td>Augusta Griffith</td>
              <td>bodabuk@dupige.bt</td>
              <td>Ecuador</td>
              <td>(561) 401-8628</td>
              <td>464 Coti Avenue</td>
            </tr>
            <tr>
              <td>Daisy Wagner</td>
              <td>ro@ucoevi.ye</td>
              <td>Greece</td>
              <td>(211) 548-7600</td>
              <td>433 Sefa Plaza</td>
            </tr>
            <tr>
              <td>Madge Ballard</td>
              <td>kojit@so.uy</td>
              <td>Côte d'Ivoire</td>
              <td>(333) 756-1521</td>
              <td>309 Nusi Terrace</td>
            </tr>
            <tr>
              <td>Leah Huff</td>
              <td>ejizame@vetuk.uz</td>
              <td>Cyprus</td>
              <td>(946) 866-5001</td>
              <td>122 Ejebub Heights</td>
            </tr>
          </tbody>
        </Table>
      </article>
    </section>
  );
};
