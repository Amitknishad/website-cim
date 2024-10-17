"use client";
import WithLayout from '../../layouts/WithLayout';
import PageComponent from '../../components/account/PageComponent';

export default function WebPage(props) {
  return (<WithLayout pageTitle={'प्रोफ़ाइल'} {...props} ><PageComponent {...props} /></WithLayout>);
}
