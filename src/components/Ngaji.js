import React from 'react';
import AddItem from './AddItem';
import VisibleItems from './VisibleItems';
import Footer from './Footer';

const Ngaji = ({
  store
}) => (
  <div>
    <AddItem />
    <VisibleItems />
    <Footer />
  </div>
)

export default Ngaji;