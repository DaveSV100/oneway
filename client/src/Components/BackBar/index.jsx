/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// Sticky back button under the header. Behaves like the browser's back when the visitor came from another page of
// the site (React Router keeps a history index), otherwise goes to `to` (e.g. someone arriving from YouTube).
const BackBar = ({ to, label }) => {
  const navigate = useNavigate();

  const goBack = (e) => {
    if (window.history.state?.idx > 0) {
      e.preventDefault();
      navigate(-1);
    }
  };

  return (
    <div className="ai-backbar">
      <div className="ai-container">
        <Link to={to} className="ai-backbar_btn" onClick={goBack}>
          <ArrowLeftIcon />
          {label}
        </Link>
      </div>
    </div>
  );
};

export default BackBar;
