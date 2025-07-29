// frontend/src/store/user.js import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', { state: () => ({ uid: null, username: null, accessToken: null, verified: false, }), actions: { setUser({ uid, username, accessToken }) { this.uid = uid; this.username = username; this.accessToken = accessToken; }, setVerified(value) { this.verified = value; }, logout() { this.uid = null; this.username = null; this.accessToken = null; this.verified = false; }, }, });

