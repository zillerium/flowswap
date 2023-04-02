import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { ListGroup, Badge, Form, Container, Button, Row, Col } from "react-bootstrap";
import AssetShow from '../components/AssetShow';

const AssetShowPage = () => {


  return (
    <>
	  <AssetShow />
    </>
  );
};

export default AssetShowPage;
