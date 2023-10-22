import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const auth = useFirebaseAuth();

  const errorMsg = ref("");
  const errorCodes = {
    "auth/invalid-login-credentials": "Credenciales inválidas",
  };

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        errorMsg.value = errorCodes[error.code];
      });
  };

  const hasError = computed(() => {
    return errorMsg.value;
  });

  return { login, hasError, errorMsg };
});
