import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

type TabType = 'add' | 'delete';

const StudentManagement: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('add');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Gestion des Étudiants</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-90">Bienvenue, {user?.email}</span>
            <button
              onClick={handleLogout}
              className="bg-white bg-opacity-20 border border-white border-opacity-30 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => setActiveTab('add')}
            className={`flex-1 py-4 px-6 font-medium transition ${
              activeTab === 'add'
                ? 'text-primary border-b-2 border-primary bg-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Ajouter un étudiant
          </button>
          <button
            onClick={() => setActiveTab('delete')}
            className={`flex-1 py-4 px-6 font-medium transition ${
              activeTab === 'delete'
                ? 'text-primary border-b-2 border-primary bg-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Supprimer un étudiant
          </button>
        </div>

        {/* Content */}
        <div className="p-8 min-h-80">
          {activeTab === 'add' && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Enregistrer un nouvel étudiant
              </h2>
              <p className="text-gray-500">
                Formulaire d'ajout d'un étudiant sera implémenté ici
              </p>
            </div>
          )}

          {activeTab === 'delete' && (
            <div className="animate-fadeIn">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Supprimer un étudiant
              </h2>
              <p className="text-gray-500">
                Formulaire de suppression d'un étudiant sera implémenté ici
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;