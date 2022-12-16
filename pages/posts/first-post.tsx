import Link from 'next/link';
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function FirstPost() {
  return (
    <>
    <FontAwesomeIcon icon={faCoffee} /> 
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        
  <i className="fa-solid fa-user"></i>
      </h2>
      <i className="fa-solid fa-turkey"></i>
    </>
  );
}