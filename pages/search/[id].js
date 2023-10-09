import Nav from '../../components/nav';
import { useRouter } from 'next/router';
import SearchResults from '../../components/SearchResults';
import { useState, useEffect } from 'react';

export default function SpecificCookbookRoute() {
  return (
    <div>
      <Nav />
      <SearchResults />
    </div>
  );
}
