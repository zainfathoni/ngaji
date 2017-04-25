import React from 'react';
import AddItem from './AddItem';
import VisibleItems from './VisibleItems';
import Footer from './Footer';

const Ngaji = ({ match }) => (
  <div>
    <AddItem />
    <VisibleItems
      filter={match.params.filter || 'all'}
    />
    <Footer />
  </div>
)

export default Ngaji;