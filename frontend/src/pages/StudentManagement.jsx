import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/StudentManagement.css';

const StudentManagement = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('add');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="student-management-container">
      <div className="student-management-card">
        <div className="header">
          <h1>Gestion des Étudiants</h1>
          <div className="user-info">
            <span>Bienvenue, {user?.email}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Déconnexion
            </button>
          </div>
        </div>

        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            Ajouter un étudiant
          </button>
          <button
            className={`tab-btn ${activeTab === 'delete' ? 'active' : ''}`}
            onClick={() => setActiveTab('delete')}
          >
            Supprimer un étudiant
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'add' && (
            <div className="add-student-section">
              <h2>Enregistrer un nouvel étudiant</h2>
              <p>Formulaire d'ajout d'un étudiant sera implémenté ici</p>
            </div>
          )}

          {activeTab === 'delete' && (
            <div className="delete-student-section">
              <h2>Supprimer un étudiant</h2>
              <p>Formulaire de suppression d'un étudiant sera implémenté ici</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
