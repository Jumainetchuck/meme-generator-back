import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, isLoading } = useAuth();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simuler le chargement des données du profil
    if (user) {
      setProfileData(user);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="profile-container">
        <p>Chargement du profil...</p>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="profile-container">
        <p>Erreur: Impossible de charger les données du profil</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Mon Profil</h1>
        
        <div className="profile-info">
          <div className="info-group">
            <label>Email:</label>
            <p>{profileData.email}</p>
          </div>
          
          {profileData.firstName && (
            <div className="info-group">
              <label>Nom:</label>
              <p>{profileData.firstName}</p>
            </div>
          )}
          
          {profileData.lastName && (
            <div className="info-group">
              <label>Prénom:</label>
              <p>{profileData.lastName}</p>
            </div>
          )}

          {profileData.id && (
            <div className="info-group">
              <label>ID Utilisateur:</label>
              <p>{profileData.id}</p>
            </div>
          )}
        </div>

        <div className="profile-actions">
          <button onClick={handleLogout} className="logout-btn">
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
