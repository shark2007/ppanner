import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Upload, Trash2, Plus, Star, Check, 
  ArrowLeft, Eye, RefreshCw, ChefHat, Sparkles, AlertCircle
} from 'lucide-react';
import { INITIAL_RECIPES } from '../data/recipes';
import { PRODUCTS } from '../data/products';

export default function AdminPage() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('purely_paneer_community_recipes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_RECIPES;
      }
    }
    return INITIAL_RECIPES;
  });

  const [activeTab, setActiveTab] = useState('add-recipe');
  const [toastMessage, setToastMessage] = useState('');

  // Form Fields
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Chef / Food Technologist');
  const [location, setLocation] = useState('Mogappair, Chennai');
  const [paneerType, setPaneerType] = useState('Fresh Paneer');
  const [time, setTime] = useState('20 mins');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState('Party Starters');
  const [rating, setRating] = useState(5.0);
  const [ratingCount, setRatingCount] = useState(1);
  const [description, setDescription] = useState('');
  const [ingredientsText, setIngredientsText] = useState('');
  const [stepsText, setStepsText] = useState('');
  const [imagePreview, setImagePreview] = useState('/images/hero_paneer.jpg');

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('purely_paneer_community_recipes', JSON.stringify(recipes));
  }, [recipes]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        showToast('Image uploaded and preview generated!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateRecipe = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      showToast('Please provide a recipe title.');
      return;
    }

    const ingArray = ingredientsText
      .split('\n')
      .map((i) => i.trim())
      .filter(Boolean);

    const stepArray = stepsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const newRecipe = {
      id: `admin-recipe-${Date.now()}`,
      title: title.trim(),
      author: author.trim() || 'Purely Paneer Team',
      location: location.trim() || 'Chennai',
      paneerType,
      paneerSlug: paneerType.toLowerCase().replace(/ /g, '-'),
      time: time || '15 mins',
      difficulty,
      category,
      rating: parseFloat(rating) || 5.0,
      ratingCount: parseInt(ratingCount, 10) || 1,
      image: imagePreview || '/images/hero_paneer.jpg',
      description: description.trim() || 'Crafted with 100% pure milk paneer in Chennai.',
      ingredients: ingArray.length > 0 ? ingArray : ['250g Purely Paneer', 'Fresh seasoning', 'Cold-pressed oil'],
      steps: stepArray.length > 0 ? stepArray : ['Cut paneer into cubes.', 'Sear lightly in a pan.', 'Serve hot.']
    };

    const updated = [newRecipe, ...recipes];
    setRecipes(updated);
    showToast(`✅ "${newRecipe.title}" published successfully!`);

    // Reset Form
    setTitle('');
    setDescription('');
    setIngredientsText('');
    setStepsText('');
    setImagePreview('/images/hero_paneer.jpg');
    setActiveTab('manage-recipes');
  };

  const handleDeleteRecipe = (id) => {
    if (window.confirm('Are you sure you want to remove this recipe?')) {
      const filtered = recipes.filter((r) => r.id !== id);
      setRecipes(filtered);
      showToast('Recipe deleted.');
    }
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Reset all recipes to default catalogue?')) {
      setRecipes(INITIAL_RECIPES);
      localStorage.setItem('purely_paneer_community_recipes', JSON.stringify(INITIAL_RECIPES));
      showToast('Reset to default initial recipes.');
    }
  };

  return (
    <main className="bg-[#FAF7F0] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 bg-[#142E20] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#3C6E52] animate-bounce text-xs sm:text-sm font-semibold">
            <Check className="w-5 h-5 text-[#539E72]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#E2D6C5] gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#142E20] text-[#FFFDF9]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#539E72]" />
                ADMIN PORTAL
              </span>
              <span className="text-xs text-[#526458]">Chennai • Mogappair Studio</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#142E20]">
              Recipe & Content Studio
            </h1>
            <p className="text-xs sm:text-sm text-[#4E5F55] mt-1">
              Add new recipes, upload high-res food images, set star ratings, and configure parameters.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 bg-[#FCFAF7] hover:bg-[#F3ECE0] text-[#142E20] border border-[#DDD3C2] px-4 py-2.5 rounded-xl text-xs font-semibold"
            >
              <Eye className="w-4 h-4" />
              <span>View Live Recipes</span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#526458] hover:text-[#142E20] px-3 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('add-recipe')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
              activeTab === 'add-recipe'
                ? 'bg-[#142E20] text-white shadow-xs'
                : 'bg-white text-[#3E4F44] border border-[#DDD3C2] hover:border-[#142E20]'
            }`}
          >
            + Add New Recipe with Image
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('manage-recipes')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
              activeTab === 'manage-recipes'
                ? 'bg-[#142E20] text-white shadow-xs'
                : 'bg-white text-[#3E4F44] border border-[#DDD3C2] hover:border-[#142E20]'
            }`}
          >
            Manage Existing Recipes ({recipes.length})
          </button>

          <button
            type="button"
            onClick={handleResetToDefaults}
            className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 text-xs text-[#8B4836] hover:bg-[#F5E6E0] rounded-xl transition-colors font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>
        </div>

        {/* TAB 1: ADD NEW RECIPE */}
        {activeTab === 'add-recipe' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Column (7 cols) */}
            <form onSubmit={handleCreateRecipe} className="lg:col-span-7 bg-[#FCFAF7] border border-[#DDD3C2] p-6 sm:p-8 rounded-3xl shadow-xs space-y-5">
              
              <h2 className="font-serif text-2xl font-bold text-[#142E20] pb-2 border-b border-[#EDE4D5]">
                New Recipe Parameters
              </h2>

              {/* Title & Author */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Recipe Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Malai Paneer Kofta in Cashew Gravy"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:ring-1 focus:ring-[#142E20] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Chef / Creator Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Food Technologist"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:ring-1 focus:ring-[#142E20] focus:outline-none"
                  />
                </div>
              </div>

              {/* Location & Paneer Variant */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Chennai Locality
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Mogappair, Chennai"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Purely Paneer Product
                  </label>
                  <select
                    value={paneerType}
                    onChange={(e) => setPaneerType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none font-medium"
                  >
                    <option value="Fresh Paneer">Classic Fresh Paneer</option>
                    <option value="Hariyali Paneer">Hariyali Paneer</option>
                    <option value="Peri Peri Paneer">Peri Peri Paneer</option>
                    <option value="Paneer Chocolate Protein Dessert">Chocolate Protein Dessert</option>
                  </select>
                </div>
              </div>

              {/* Cook Time, Difficulty & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Cook Time
                  </label>
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="e.g. 20 mins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Difficulty Level
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Quick">Quick</option>
                    <option value="Medium">Medium</option>
                    <option value="Chef Level">Chef Level</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Category Tag
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none"
                  >
                    <option value="Party Starters">Party Starters</option>
                    <option value="Quick 15-Min">Quick 15-Min</option>
                    <option value="High Protein">High Protein</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Main Course">Main Course</option>
                  </select>
                </div>
              </div>

              {/* Star Rating Parameters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-2xl border border-[#EDE4D5]">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Initial Star Rating (1.0 to 5.0)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      step="0.1"
                      min="1.0"
                      max="5.0"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="w-24 px-3 py-2 rounded-xl border border-[#CFC5B4] text-xs sm:text-sm font-bold text-[#142E20]"
                    />
                    <div className="flex items-center text-[#E28C37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Review Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={ratingCount}
                    onChange={(e) => setRatingCount(e.target.value)}
                    className="w-24 px-3 py-2 rounded-xl border border-[#CFC5B4] text-xs sm:text-sm font-bold text-[#142E20]"
                  />
                </div>
              </div>

              {/* Image Upload Area */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                  Dish Photograph (Upload File or Use Preset)
                </label>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl border border-[#CFC5B4]">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-[#DDD3C2] bg-stone-100 shrink-0 shadow-inner">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 space-y-2.5">
                    <label className="cursor-pointer inline-flex items-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-colors shadow-xs">
                      <Upload className="w-4 h-4 text-[#539E72]" />
                      <span>Choose Image from Device</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="hidden" 
                      />
                    </label>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#526458]">
                      <span className="font-semibold text-[#142E20]">Or pick reference photo:</span>
                      <button type="button" onClick={() => setImagePreview('/images/lifestyle_tikka.jpg')} className="underline hover:text-[#142E20]">Tikka</button>
                      <span>•</span>
                      <button type="button" onClick={() => setImagePreview('/images/hariyali_paneer.jpg')} className="underline hover:text-[#142E20]">Hariyali</button>
                      <span>•</span>
                      <button type="button" onClick={() => setImagePreview('/images/peri_peri_paneer.jpg')} className="underline hover:text-[#142E20]">Peri Peri</button>
                      <span>•</span>
                      <button type="button" onClick={() => setImagePreview('/images/chocolate_protein_dessert.jpg')} className="underline hover:text-[#142E20]">Dessert</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Appetizing summary of flavors and texture..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none"
                />
              </div>

              {/* Ingredients & Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Ingredients (One line each)
                  </label>
                  <textarea
                    rows={4}
                    value={ingredientsText}
                    onChange={(e) => setIngredientsText(e.target.value)}
                    placeholder="400g Purely Paneer&#10;1 tbsp Ghee&#10;1 tsp Kashmiri Chili&#10;Chaat Masala"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#142E20] mb-1.5">
                    Cooking Instructions (One line each)
                  </label>
                  <textarea
                    rows={4}
                    value={stepsText}
                    onChange={(e) => setStepsText(e.target.value)}
                    placeholder="Cut paneer cubes gently.&#10;Sear on skillet with spices.&#10;Garnish with coriander."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#CFC5B4] bg-white text-xs sm:text-sm text-[#142E20] focus:outline-none font-mono text-[11px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#EDE4D5] flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#142E20] hover:bg-[#1E4330] text-white px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wider shadow-lg hover:shadow-xl transition-all"
                >
                  <Plus className="w-4 h-4 text-[#539E72]" />
                  <span>PUBLISH RECIPE TO LIVE CATALOG</span>
                </button>
              </div>

            </form>

            {/* Live Card Preview Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="sticky top-24">
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#387652] block mb-2">
                  LIVE CARD PREVIEW
                </span>

                <div className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-3xl overflow-hidden shadow-lg p-0">
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img src={imagePreview} alt="Live preview" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-[#142E20] text-white">
                        {paneerType}
                      </span>
                      <span className="text-[10px] uppercase px-2.5 py-1 rounded-full bg-white text-[#142E20]">
                        {category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1 text-xs font-bold text-[#142E20]">
                      <Star className="w-3.5 h-3.5 fill-[#E28C37] text-[#E28C37]" />
                      <span>{rating}</span>
                      <span className="text-[10px] text-[#6E8074]">({ratingCount})</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5D6F63] mb-2">
                      <span>⏱️ {time || '20 mins'}</span>
                      <span>By {author || 'Chef'} ({location || 'Chennai'})</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#142E20]">
                      {title || 'Your Recipe Title Here'}
                    </h3>

                    <p className="text-xs text-[#465A4E] mt-2 line-clamp-2">
                      {description || 'Your mouth-watering description will appear right here.'}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#EDE4D5] flex items-center justify-between text-xs">
                      <span className="text-[#387652] font-semibold">Ready for WhatsApp orders</span>
                      <span className="bg-[#E9F3ED] text-[#1E4330] px-2 py-0.5 rounded-sm font-mono text-[10px]">
                        {difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-[#EAF2ED] border border-[#CCE3D4] text-xs text-[#254A34] flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                  <p>
                    Once published, this recipe will immediately show on the live <strong>/recipes</strong> page, and visitors can tap "Rate Recipe" or "Order Paneer on WhatsApp"!
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: MANAGE EXISTING RECIPES */}
        {activeTab === 'manage-recipes' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl font-bold text-[#142E20]">
                All Live Community Recipes ({recipes.length})
              </h2>
              <span className="text-xs text-[#526458]">
                Changes are saved locally in real time.
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-[#FCFAF7] border border-[#DDD3C2] rounded-2xl overflow-hidden p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-16 h-16 rounded-xl object-cover border border-[#DDD3C2]"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] tracking-wider uppercase font-semibold text-[#387652]">
                          {recipe.paneerType}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-[#142E20] truncate">
                          {recipe.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-[#E28C37] mt-0.5">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="font-bold text-[#142E20]">{recipe.rating}</span>
                          <span className="text-[#64786B] text-[10px]">({recipe.ratingCount} reviews)</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#4E5F55] line-clamp-2">
                      {recipe.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#EDE4D5] flex items-center justify-between">
                    <span className="text-[11px] text-[#697C6F]">
                      By {recipe.author}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleDeleteRecipe(recipe.id)}
                      className="p-1.5 text-[#B53D1B] hover:bg-[#FBEBE7] rounded-lg transition-colors"
                      title="Delete this recipe"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
