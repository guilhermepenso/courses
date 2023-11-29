class Personagens { 

private:
    unsigned char Forca;
    unsigned char HP;
    unsigned char Defesa;
public:
    virtual~Personagens();
    unsigned char getForca() const;
    void setForca(unsigned char Forca);
    unsigned char getHP() const;
    void setHP(unsigned char HP);
    unsigned char getDefesa() const;
    void setDefesa(unsigned char Defesa);
    };