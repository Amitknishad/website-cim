"use client";
import WithLayout from '../../layouts/WithLayout';
import PageComponent from '../../components/call-list/PageComponent';

export default function WebPage(props) {
  return (<WithLayout {...props} ><PageComponent {...props} /></WithLayout>);
}