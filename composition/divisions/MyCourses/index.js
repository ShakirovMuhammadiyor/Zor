import { Fragment } from 'react';
import getLayout from '../../getLayout';
import UserInfoAndStats from './fragments/UserInfoAndStats';
import MainContent from './fragments/MainContent';

export default function NestedGrid() {
  return (getLayout(
    <Fragment>
        <UserInfoAndStats />
        <MainContent />
    </Fragment>
  , "full"));
}
