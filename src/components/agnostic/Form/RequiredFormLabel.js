import styled from "@emotion/styled";
import {FormLabel} from "@mui/material";

const RequiredFormLabel = styled(FormLabel)`
  &:after {
    content: " *";
    color: red;
  }
`;

export default RequiredFormLabel;
