export default function getUrlParamValue(whichParam) {
  const queryParamSection = window.location.hash.split('?')[1];
  const queryParams = queryParamSection.split('&');

  const requestedParam = queryParams.find(param => param.includes(whichParam));
  
  const requestedParamValue = requestedParam && requestedParam.split('=')[1];

  return requestedParamValue
}