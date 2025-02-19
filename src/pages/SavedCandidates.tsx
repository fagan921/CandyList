import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // ✅ Load candidates from localStorage on page load
  useEffect(() => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.login}>
              <img src={candidate.avatar_url} alt={candidate.name} width="50" />
              <h3>{candidate.name || "No Name Available"}</h3>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location || "Unknown"}</p>
              <p>Company: {candidate.company || "Not listed"}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been saved yet.</p>
      )}
    </>
  );
};

export default SavedCandidates;
