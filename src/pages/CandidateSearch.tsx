import { useEffect, useState } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";
import "../styles/CandidateSearch.css";
const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [_savedCandidates, _setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch a new random candidate from GitHub
  const fetchCandidate = async () => {
    setLoading(true);
    try {
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        const user = await searchGithubUser(candidates[0].login);
        setCandidate(user);
      } else {
        setCandidate(null);
      }
    } catch (error) {
      console.error("Error fetching candidate:", error);
      setCandidate(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  // Save candidate to local storage and fetch the next one
  const saveCandidate = () => {
    if (candidate) {
      const storedCandidates = localStorage.getItem("savedCandidates");
      const candidateList: Candidate[] = storedCandidates ? JSON.parse(storedCandidates) : [];

      if (!candidateList.some((c) => c.login === candidate.login)) {
        candidateList.push(candidate);
        localStorage.setItem("savedCandidates", JSON.stringify(candidateList));
      }
    }
    fetchCandidate();
  };

  // Skip candidate and fetch the next one
  const skipCandidate = () => {
    fetchCandidate();
  };

  return (
    <section className="candidate-container">
      <h1>Candidate Search</h1>
      {loading ? (
        <p className="loading-text">Loading candidate...</p>
      ) : candidate ? (
        <div className="candidate-card">
          <img className="candidate-avatar" src={candidate.avatar_url} alt={candidate.name} />
          <h2 className="candidate-name">{candidate.name}</h2>
          <p className="candidate-info">Username: {candidate.login}</p>
          <p className="candidate-info">Location: {candidate.location || "Unknown"}</p>
          <p className="candidate-info">Email: {candidate.email || "Not available"}</p>
          <p className="candidate-info">Company: {candidate.company || "Not listed"}</p>
          <a className="candidate-link" href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
          <div className="button-group">
            <button className="save-button" onClick={saveCandidate}>+ Save Candidate</button>
            <button className="skip-button" onClick={skipCandidate}>- Skip Candidate</button>
          </div>
        </div>
      ) : (
        <p className="no-candidates">No candidates available.</p>
      )}
    </section>
  );
};

export default CandidateSearch;