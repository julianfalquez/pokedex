import React, { useState, useEffect } from "react";
import { getData, postData } from "../utils/httpsRequests";

function useFetch({ url }: { url: string }) {
  useEffect(() => {
    fetch(url);
  }, []);
}
